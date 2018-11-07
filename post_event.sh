#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 4,
  "name": "The India"
}' "http://localhost:3000/groups"
