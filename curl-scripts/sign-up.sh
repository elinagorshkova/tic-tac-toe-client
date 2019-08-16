# curl request to test sign-up feature
# Test successful
# EMAIL=email@example.com PASSWORD=123 sh curl-scripts/sign-up.sh
# HTTP/1.1 201 Created
# Date: Wed, 14 Aug 2019 14:50:08 GMT
curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
