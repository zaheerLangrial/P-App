from rest_framework.serializers import ModelSerializer
from .models import *




class FavNameSerializer (ModelSerializer) : 
    class Meta : 
        model = FavName
        fields = '__all__'
        
        
        
class ReasonListSerializer (ModelSerializer) : 
    class Meta : 
        model = ReasonList
        fields = '__all__'
        
        
        
        
    
