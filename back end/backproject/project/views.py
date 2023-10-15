from django.shortcuts import render
from django.http import JsonResponse
from .models import UserProfile,Job_title
import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def register_user(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"

    if request.method == "POST":
        data = json.loads(request.body)
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        password = data.get("password")
        avatarUrl = data.get("avatarUrl")
        usertag = data.get("usertag")
        department = data.get("department")
        birthday = data.get("birthday")
        phone = data.get("phone")
        # Create a new user profile
        user_profile = UserProfile(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password,
            avatarUrl=avatarUrl,
            usertag=usertag,
            department=department,
            birthday=birthday,
            phone=phone,
        )
        user_profile.save()

        return JsonResponse({"message": "User registered successfully"})

    return JsonResponse({"message": "Invalid request method"})


@csrf_exempt
def login_user(request):
    response = JsonResponse({})  # Provide initial empty data
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"

    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            email = data.get("email")
            password = data.get("password")
            user_exists = UserProfile.objects.filter(
                email=email, password=password
            ).exists()

            return JsonResponse({"user_exists": user_exists})
        except json.JSONDecodeError as e:
            response.status_code = 400  # Bad Request
            return JsonResponse({"error": "Invalid JSON format"}, status=400)
    else:
        response.status_code = 405  # Method Not Allowed
        return response


@csrf_exempt
def get_request(request):
    if request.method == "GET":
        user_profiles = UserProfile.objects.all()


        user_profiles_data = [
            {
                "first_name": profile.first_name,
                "last_name": profile.last_name,
                "email": profile.email,
                "password": profile.password,
                "avatarUrl": profile.avatarUrl,
                "usertag": profile.usertag,
                "department": profile.department,
                "birthday": profile.birthday,
                "phone": profile.phone,
            }
            for profile in user_profiles
        ]
        data = {"user_profiles": user_profiles_data}  # Модифицируйте под свои данные
        response = JsonResponse(data)
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"
        return response
    return JsonResponse({"error": "Method Not Allowed"}, status=405)



@csrf_exempt
def get_request_job_titles(request):
    if request.method == "GET":
        user_profiles = Job_title.objects.all()
        

        user_profiles_data = [
            {
                "department": profile.name,
                
            
            }
            for profile in user_profiles
        ]
        data = {"user_profiles": user_profiles_data}  # Модифицируйте под свои данные
        response = JsonResponse(data)
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"
        return response
    return JsonResponse({"error": "Method Not Allowed"}, status=405)

