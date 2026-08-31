<!--   1) Write a shell script that does the following tasks: -->

#!/bin/bash

mkdir sessionone

touch "sessionone/tests.sh"

echo "Enter Name: "
read name
echo "Current date: $(date)"
hostname
whoami
df -h
ps aux

ps aux > "sessionone/tests.sh"