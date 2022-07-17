from rest_framework_mongoengine import serializers
from .models import Query_Shortner

class QuerySerializer(serializers.DocumentSerializer):
    class Meta:
        model = Query_Shortner
        fields = '__all__'