from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response

class UserList(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, format=None):
        """
        returns a list of all users
        it may not be a good idea to return all of these!
        """
        if request.user.is_authenticated:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        else:
            return Response({"errors": "You must be logged in to view this!"})

    def post(self, request, format=None):
        """
        basically the register method
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class UserSessions(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, format=None):
        """
        return the user if they're logged in
        """
        if request.user.is_authenticated:
            serializer = UserSerializer(request.user)
            return Response({"message": "ok", "user": serializer.data})
        return Response({"msg": "ok", "user": None})

    def post(self, request, format=None):
        """
        basically the login method
        """
        try:
            user_from_db = User.objects.get(email=request.data.get('email', ''))
            user = authenticate(username=user_from_db.username, password=request.data.get('password', ''))
            if user == None:
                return Response({"errors": "Invalid login attempt", "user": None})
            login(request, user)
            return Response({"message": "ok", "user": UserSerializer(user_from_db).data})
        except User.DoesNotExist as error:
            return Response({"errors": "Invalid login attempt", "user": None})

    def delete(self, request, format=None):
        """
        basically the logout method
        """
        logout(request)
        return Response({"msg": "logged out"})

class UserDetails(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, user_id, format=None):
        """
        TODO - use user_id to return details about a single user
        """
        return Response({"msg": "ok"})

    def put(self, request, user_id, format=None):
        """
        TODO - update the user matching a specific user_id
        """
        return Response({"msg": "ok"})

    def delete(self, request, user_id, format=None):
        """
        TODO - delete the user matching a specific user_id
        """
        return Response({"msg": "ok"})