# curl request to test retrieving games associated with an authorized user
# test Successful
curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
