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