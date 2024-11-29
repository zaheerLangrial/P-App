from django.db import models

# Create your models here.


class FavName (models.Model) : 
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=70)
    first_msg = models.TextField()
    sec_msg = models.TextField()
    

    def __str__(self):
        return self.first_name
    
    
    
class ReasonList (models.Model) : 
    reason = models.TextField()
    title = models.CharField(max_length=70, null=True, blank=True)
    
    
    def __str__(self):
        return self.title
    
    
class AboutMe (models.Model) : 
    message = models.TextField() 
    
    def __str__(self):
        return self.message
    
    
    
class Question (models.Model) : 
    question_text = models.CharField(max_length=200)
    question_ans = models.BooleanField(blank=True, null=True) 
    
    
    def __str__(self):
        return self.question_text
    
    
class RequestResponse (models.Model) : 
    date = models.CharField(max_length=70, blank=True, null= True)
    time = models.CharField(max_length=70, blank=True, null=True)
    reason = models.TextField(blank=True, null=True)
    title = models.CharField(max_length=70, blank=True, null=True)
    
    
    def __str__(self):
        return self.title
        # if self.reason:
        #     return f"Reason: {self.reason}"
        # elif self.date and self.time:
        #     return f"Date: {self.date}, Time: {self.time}"
        # else:
        #     return "RequestResponse object with no detailed info"