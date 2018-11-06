#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 103,
  "name": "The India"
}' "http://localhost:3000/groups"
