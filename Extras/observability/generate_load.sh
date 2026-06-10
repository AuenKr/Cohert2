#!/bin/bash
echo "Starting load generation for app2_profile..."
echo "Press Ctrl+C to stop."

while true; do
	curl -s http://localhost:8082/work >/dev/null
	echo -n "."
	sleep 0.1
done
