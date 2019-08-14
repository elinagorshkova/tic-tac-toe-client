# curl request to test sign-out feature
# Test Successful
# HTTP/1.1 204 No Content
# Date: Wed, 14 Aug 2019 15:10:34 GMT
curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
