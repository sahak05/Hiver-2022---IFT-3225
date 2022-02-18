#!/bin/bash


for FILE in "monrep"/*; do
    python3 beautifulsoup.py $FILE
done