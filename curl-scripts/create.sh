# curl request to create a new game
# Test Successful
# HTTP/1.1 201 Created
# Date: Wed, 14 Aug 2019 16:48:07 GMT
# {"game":{"id":1429,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":95,"email":"email@example.com"},"player_o":null}}
curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
