# curl request to test Change Password feature
# Test Successful
# HTTP/1.1 204 No Content
# Date: Wed, 14 Aug 2019 15:17:13 GMT
curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
