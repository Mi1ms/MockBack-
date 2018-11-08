#!/bin/bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "id": 1,
  "name": "2p"
}' "http://localhost:3000/groups/1"
