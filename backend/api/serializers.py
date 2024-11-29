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
        
        
class AboutMeSerializer (ModelSerializer) : 
    class Meta : 
        model = AboutMe
        fields = '__all__'
        
        
class QuestionSerializer (ModelSerializer) : 
    class Meta : 
        model = Question
        fields = '__all__'
        
        
class ConfirmOrNotSerializer (ModelSerializer) : 
    class Meta : 
        model = RequestResponse
        fields = '__all__'
        
        
        
        
    
