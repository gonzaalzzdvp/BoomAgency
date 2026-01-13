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
        password = data.get('password')
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        tokens = get_tokens_for_user(user)
        response = Response({'message': 'Usuario creado'}, status=status.HTTP_201_CREATED)
        # Guardar token en cookie segura
        response.set_cookie('access', tokens['access'], httponly=True)
        response.set_cookie('refresh', tokens['refresh'], httponly=True)
        return response

# LOGIN
class LoginView(APIView):
    def post(self, request):
        data = request.data
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user is None:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        tokens = get_tokens_for_user(user)
        response = Response({'message': 'Login exitoso'}, status=status.HTTP_200_OK)
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
