from django.urls import path
from .views import *

urlpatterns = [
    path('get_fav_name_msgs/', Get_FavName_Msgs.as_view()),
    path('get_reason_list/', Get_Reason_List_View.as_view()),
    path('about_me/', Get_AboutMe_View.as_view()),
    path('get_questions/', Get_Questions_View.as_view()),
    path('update_question/', Update_Question_View.as_view()),
    path('add_and_update_confirm_entry/', ConfirmedOrNot_View.as_view()),
    path('thankyou/', Get_ThankYou_View.as_view()),
    
]