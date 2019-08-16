# curl request to test update game data feature
# Test Successfull
# HTTP/1.1 200 OK
# Date: Wed, 14 Aug 2019 18:44:03 GMT
# {"game":{"id":1429,"cells":["x","","","","","","","",""],"over":false,"player_x":{"id":95,"email":"email@example.com"},"player_o":null}}

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
 --header "Content-Type: application/json" \
 --header "Authorization: Token token=${TOKEN}" \
 --data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": false
  }
}'
 echo
