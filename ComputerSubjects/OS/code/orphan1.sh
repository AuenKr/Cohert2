#!/bin/bash
sleep 5
sleep 15 & # -> & for detaching it from parent process

# sleep 20  
echo "exit orphan process"
