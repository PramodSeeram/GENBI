# api/views.py
import MySQLdb
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class ValidateMySQLConnectionView(APIView):
    def post(self, request):
        host = request.data.get("host")
        port = request.data.get("port")
        username = request.data.get("username")
        password = request.data.get("password")
        database_name = request.data.get("databaseName")

<<<<<<< HEAD
        try:
            # Attempt to connect to MySQL
=======
        # Attempt to connect to the MySQL database
        try:
>>>>>>> 640fe20350cb6b9ac885ce044fe9324caf604ae8
            connection = MySQLdb.connect(
                host=host,
                port=int(port),
                user=username,
                passwd=password,
                db=database_name
            )

            cursor = connection.cursor()
            cursor.execute("SHOW TABLES;")
            tables = cursor.fetchall()

            connection.close()

            return Response({"tables": [table[0] for table in tables]}, status=status.HTTP_200_OK)

        except MySQLdb.Error as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
