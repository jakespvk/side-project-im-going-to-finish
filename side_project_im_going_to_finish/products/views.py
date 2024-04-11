from django.shortcuts import render 
from .models import Product 
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *

# Create your views here.
class product_list(APIView):
    def get(self, request):
        output = [{"name": output.name, "description": output.description, "price": output.price} for output in Product.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
