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

## Creating a Snap-in
### HelloWorld snap-in 
1. Install the DevRev CLI,Jq and DevRev SDK<br>
2.After installation of cli Log in to DevRev for authentication with the command<br>

```
devrev profiles authenticate -o kalavatitalli2002 -u kalavatitalli7@gmail.com

```
<br>

3.To initialize a Hello world snap-in template, run the following command:
```
devrev snap_in_version init

```
<br>
4.This will create a snap-in template codein that folder.There will be many files/folders in the template, but our main focus is on just few files.<br>
5. First is manifest.yaml, here we define the name of our snap-in, its description,functions and event(command/automation) etc
Now based on the fuctions defined in this .yaml, we define the fuctions in the function folder(which is inside code folder)<br>
6. Here for hello_world snap-in, in the function that we create(or rename the default fn and make necessary changes in related files) in run fn we get all the objects that trigger the event defined in .yaml file. now these events are looped and handleevent() is called.<br>
7.Now for helloworld snapin we write a console.log("hello world") in this handleevent(), so whenever and event is created "hello world is printed"<br>
8. Now in the code directory run the following commands

   ```
   npm install
   
  ```

### Auto-reply Snap-In For Snap-in Challenge
1. Install the automatic customer reply snap-in from the DevRev marketplace.<br>
2. Select the dev org to install the snap-in, confirm installation, and click Deploy snap-in.<br>
3. The automatic customer reply snap-in enables you to automatically reply to visitors in your PLuG widget. You can also send a custom button along with the automated message. You can collect the visitor's email address if it is not already in the system. Depending on the requirement, these functionalities can be enabled or disabled.<br>
4. Configure the Auto-Replay snap-in after succesful installation for replying .<br>
5. Toggle the Enable automated reply button to enable automatic customer response.Enter the text you wish to send as an automated reply in the Automated reply field.Like I have configured as "Thank you for contacting us. We will respond as soon as possible. Meanwhile, you can perform the following actions or provide additional information."<br>
6. Toggle the Set business hours toggle on. This will define your business hours.The text you wish to send as an automated reply should be entered in the "Automated messages after business hours" field.
Like I have entered "Hi, you have reached us after hours. We will respond as soon as possible. While you wait, please add any additional information that may help us with your inquiry."<br>
7. Enter the UTC offset, business days, business start and end hours, and business hours in the corresponding fields as input.<br>
8.To send a button, turn on the Enable a custom button toggle.In the Text displayed on custom button field, enter the text to be displayed on the button. For example, Book a Demo, Meet with Us!, Let's Chat.
In the Target URL for the custom button field, enter the website you'd like to redirect to, such as Calendly, Hubspot meetings, Microsoft Bookings, or another site.<br>
9. Turn on the Enable email collector toggle to start gathering unregistered email addresses.Type the text that will appear in the email collector in the placeholder text field.Text to appear on the submit button should be entered in the Email collector submit button text field.
10. Click the save to unable Auto-reply after office hours.
11. Below are the Screenshot for demonstration auto-reply to customers, here i sent the nmessage on saturday which is not present in working days of our configuration, so the reply will be Hi, you have reached us after hours. We will respond as soon as possible. While you wait, please add any additional information that may help us with your inquiry and if you click on send text button it redirected to the URL that is mentioned the enter email and submit.
![pic11](https://github.com/Kalavati2/Kalavatitalli_challenge/assets/117050494/52272413-a181-4ed9-abbd-480e3fa7ec81)
![pic21](https://github.com/Kalavati2/Kalavatitalli_challenge/assets/117050494/9e88521c-80e4-429b-9feb-f978ae961c93)
![pic31](https://github.com/Kalavati2/Kalavatitalli_challenge/assets/117050494/eaf1b3e5-4f32-4411-bdac-081d926c554c)














