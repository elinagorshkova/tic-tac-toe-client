# curl request to test SIGN IN feature
# Test successful
# EMAIL=email@example.com PASSWORD=123 sh curl-scripts/sign-in.sh
# HTTP/1.1 200 OK
# Date: Wed, 14 Aug 2019 14:52:43 GMT
curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
