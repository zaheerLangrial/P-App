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
    
    
    
    
class Get_AboutMe_View (APIView) :
    def get (self, request) : 
        aboutMe_message = AboutMe.objects.all()
        serializer = AboutMeSerializer(aboutMe_message, many=True) 
        if len(serializer.data) : 
            return Response(serializer.data[0], status=status.HTTP_200_OK)
        
        return Response({"message": "Empty list of reasons"}, status=status.HTTP_403_FORBIDDEN)
    
    
    
class Get_Questions_View (APIView) : 
    def get (self, request) : 
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True) 
        if len(serializer.data) : 
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({"message": "Something wants wrong"}, status=status.HTTP_403_FORBIDDEN)
    
    
    
class Update_Question_View(APIView):
    def post (self, request) : 
        ques_id = request.data.get('id')
        ques_ans = request.data.get('ques_ans')
        print('pyload', {ques_ans, ques_id})
        
        try : 
            question = Question.objects.get(id=ques_id) 
            question.question_ans = ques_ans
            question.save()
            return Response({"message": "Answer Saved"}, status=status.HTTP_201_CREATED)
        
        except Question.DoesNotExist: 
            return Response({"message": "Question not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e : 
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        
        
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import RequestResponse

class ConfirmedOrNot_View(APIView):
    def post(self, request):
        d_reason = request.data.get('reason')
        date = request.data.get('date')
        time = request.data.get('time')
        
        print('Payload', d_reason, date, time)
        
        # Check for conflicting payload
        if d_reason and date and time:
            return Response({"message": "Kindly please choose one"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # Retrieve the specific entry by ID
            is_entry = RequestResponse.objects.get(id=2)
            print('isentry', is_entry)

            # Update logic based on the payload
            if d_reason:
                is_entry.reason = d_reason
                is_entry.date = None
                is_entry.time = None
            elif date and time:
                is_entry.date = date
                is_entry.time = time
                is_entry.reason = None
            else:
                return Response({"message": "Invalid data. Provide reason or date & time."}, status=status.HTTP_400_BAD_REQUEST)

            is_entry.save()
            return Response({"message": "Entry updated successfully."}, status=status.HTTP_200_OK)
        
        except RequestResponse.DoesNotExist:
            return Response({"message": "Entry not found."}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            return Response({"message": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        
class Get_ThankYou_View (APIView) : 
    def get (self, request) : 
        is_entry = RequestResponse.objects.get(id=2)
        
        if is_entry.date and is_entry.time :
            return Response({"agree": True}, status=status.HTTP_200_OK)
        else : 
            return Response({"agree": False}, status=status.HTTP_200_OK)

        