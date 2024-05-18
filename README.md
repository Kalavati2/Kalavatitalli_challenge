# Kalavatitalli_challenge
## Utilizing the DevRev API
I have utilised DevRev API POST- https://api.devrev.ai/works.create  to create the work item of Type issue with Title Conquer the world, one API at a time! that is applied to the part named PROD-1 owned by DEVU-1 that is the display name of devrev account that i logged in.<br>
The code Snippet demonstrating creation of work item 
```
curl --location 'https://api.devrev.ai/works.create' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFXMFNwTGVwSko6ZGV2dS8xIiwiZXhwIjoxODEwNDc0ODIzLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufGhqRG5yckVuTHgiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxoakRucnJFbkx4IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xVzBTcExlcEpKIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMVcwU3BMZXBKSiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6ImthbGF2YXRpdGFsbGk3IiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6ImthbGF2YXRpdGFsbGk3QGdtYWlsLmNvbSIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJrYWxhdmF0aSBUYWxsaSIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTU4NjY4MjMsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFXMFNwTGVwSko6dG9rZW4vVFpPRVBhdUwiLCJvcmdfaWQiOiJvcmdfNm54dVVIT3hIVThUN2VUeCIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xVzBTcExlcEpKOmRldnUvMSJ9.wVjSm_EH4pt0dMzEU2-KHJYWExtrU1KT2hxNoQAtCEPh2WaCDvXW5pYdM0wNWyt_8cZXFU5jWRH4uNhGnsNdFR0cQFaSfTR7PQKzAZbWgahVCtOHdKGvzTgAyo9i7f5u-ljd1NB9iAUCZ-kI_0y-hhl9mifGA5oDKwMf4C1Mbw1Qz4lh47aZDa1ztUgaSq4Hf-VDOZ7NyY-klJPZnMbUhsuTxtk8Kz2T7mP2IqNjv_ZdcvEPDg0GlKravN_2hM66KVBaEbf1cJHwVjLd7wtfjyDqRNyPhWhf8juQwD_BhoPEhkvI1zrLKuAISc1vQPZEayY_6yzJpni6Ys-gL-n3yw' \
--header 'Cookie: __Secure-fes=44d824cbf70c4c32bb26000000000003|ceb56447-3911-4f0f-8b9f-2b24bb8d6433' \
--data '{
    "applies_to_part": "PROD-1",
    "owned_by": ["DEVU-1"],
    "title": "Conquer the world, one API at a time!",
    "type": "issue"
}

'
```

we need to choose the authorisation of type API key with key as autherisation and value as the personal access token(PAT) provided in DevRev appliccation. 
![Screenshot (211)](https://github.com/Kalavati2/Kalavatitalli_challenge/assets/117050494/db38cfff-622d-42b9-afe5-9a836afbba10)

After successfully sending the request to devrev we get the response like below
```
{
    "work": {
        "type": "issue",
        "applies_to_part": {
            "type": "product",
            "display_id": "PROD-1",
            "id": "don:core:dvrv-us-1:devo/1W0SpLepJJ:product/1",
            "name": "Default Product 1"
        },
        "created_by": {
            "type": "dev_user",
            "display_id": "DEVU-1",
            "display_name": "kalavatitalli7",
            "email": "kalavatitalli7@gmail.com",
            "full_name": "kalavati Talli",
            "id": "don:identity:dvrv-us-1:devo/1W0SpLepJJ:devu/1",
            "state": "active"
        },
        "created_date": "2024-05-18T06:49:47.816Z",
        "custom_fields": null,
        "display_id": "ISS-14",
        "id": "don:core:dvrv-us-1:devo/1W0SpLepJJ:issue/14",
        "modified_by": {
            "type": "dev_user",
            "display_id": "DEVU-1",
            "display_name": "kalavatitalli7",
            "email": "kalavatitalli7@gmail.com",
            "full_name": "kalavati Talli",
            "id": "don:identity:dvrv-us-1:devo/1W0SpLepJJ:devu/1",
            "state": "active"
        },
        "modified_date": "2024-05-18T06:49:47.816Z",
        "owned_by": [
            {
                "type": "dev_user",
                "display_id": "DEVU-1",
                "display_name": "kalavatitalli7",
                "email": "kalavatitalli7@gmail.com",
                "full_name": "kalavati Talli",
                "id": "don:identity:dvrv-us-1:devo/1W0SpLepJJ:devu/1",
                "state": "active"
            }
        ],
        "priority": "p2",
        "stage": {
            "name": "triage"
        },
        "stock_schema_fragment": "don:core:dvrv-us-1:stock_sf/224582",
        "title": "Conquer the world, one API at a time!"
    }
}

```
