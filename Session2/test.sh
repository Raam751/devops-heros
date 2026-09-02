#!/bin/bash

mkdir sessionone

touch "sessionone/tests.sh"


echo "Enter Name: "
read -p "Name: " name
echo "Current date: $(date)"
hostname
whoami
df -h
ps aux

ps aux > "sessionone/tests.sh"