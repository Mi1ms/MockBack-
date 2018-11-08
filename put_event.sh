#!/bin/bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "id": 1456,
  "label": "Sauvegarde doc",
  "typ": "backup",
  "status": "success",
  "groupId": 1,
  "forced": false,
  "details": "Error 234/ danger"
}' "http://localhost:3000/indicators/1456"
