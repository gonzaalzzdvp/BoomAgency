from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

# Función para crear token
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# REGISTER
class RegisterView(APIView):
    def post(self, request):
        data = request.data
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return Response(
                {'error': 'Todos los campos son obligatorios'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if User.objects.filter(username=username).exists():
            return Response({'error': 'El usuario ya existe'}, status=400)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'El email ya está registrado'}, status=400)

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        tokens = get_tokens_for_user(user)
        response = Response({'message': 'Usuario creado'}, status=201)

        response.set_cookie('access', tokens['access'], httponly=True)
        response.set_cookie('refresh', tokens['refresh'], httponly=True)

        return response

# LOGIN
class LoginView(APIView):
    def post(self, request):
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return Response(
                {'error': 'Email y password son obligatorios'},
                status=400
            )

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Credenciales inválidas'}, status=401)

        user = authenticate(username=user.username, password=password)

        if user is None:
            return Response({'error': 'Credenciales inválidas'}, status=401)

        tokens = get_tokens_for_user(user)
        response = Response({'message': 'Login exitoso'}, status=200)

        response.set_cookie('access', tokens['access'], httponly=True)
        response.set_cookie('refresh', tokens['refresh'], httponly=True)

        return response

# PROFILE (protegido)
class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({'username': user.username, 'email': user.email})

# LOGOUT
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        response = Response({'message': 'Logout exitoso'}, status=status.HTTP_200_OK)
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        return response
