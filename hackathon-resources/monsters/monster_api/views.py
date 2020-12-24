from django.shortcuts import render
from .models import Monster
from rest_framework import viewsets
from .serializers import MonsterSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# from user_api.models import User
# this is how we get the user from the user_api

class MonsterViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Monster.objects.all().order_by('name')
    serializer_class = MonsterSerializer
