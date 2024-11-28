from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class Get_FavName_Msgs (APIView) : 
    def get (self, request) : 
        favorite_name = FavName.objects.all()
        serializer = FavNameSerializer(favorite_name, many=True)
        if len(serializer.data): 
            return Response(serializer.data[0], status=status.HTTP_200_OK)
        
        
        return Response({"message": "something wants wrong!"}, status=status.HTTP_403_FORBIDDEN)
    
    
    
class Get_Reason_List_View (APIView) : 
    def get (self, request) : 
        reason_list = ReasonList.objects.all()
        serializer = ReasonListSerializer(reason_list, many=True)
        if len(serializer.data): 
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        
        return Response({"message": "Empty list of reasons"}, status=status.HTTP_403_FORBIDDEN)