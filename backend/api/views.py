#from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from rest_framework.generics import RetrieveAPIView
from .serializers import UserMeSerializer

User = get_user_model() 

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # AllowAny é CRUCIAL aqui: significa que a pessoa NÃO precisa estar logada para criar uma conta
    permission_classes = [AllowAny]

class MeView(RetrieveAPIView):
    serializer_class = UserMeSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retorna o usuário logado (self.request.user)
        return self.request.user
