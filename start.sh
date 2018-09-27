echo "Red, Green or Blue"
read pokemon

if [ $pokemon == "Red" ]; then
    REACT_APP_POKEMON="charmander" yarn start
elif [ $pokemon == "Blue" ]; then
    REACT_APP_POKEMON="squirtle" yarn start
elif [ $pokemon == "Green" ]; then 
    REACT_APP_POKEMON="bulbasaur" yarn start
else
    echo "Oops!"
    exit 1
fi
