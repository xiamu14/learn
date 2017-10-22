#!/bin/zsh
git addA
if [ $1 ]
then
    git commit -m $1
else
    echo -e "\033[31m\033[01m error:commit info can't empty\033[0m"
    exit
fi
if [ $2 ]
then
    git push origin $2
else
    git push origin master
fi

