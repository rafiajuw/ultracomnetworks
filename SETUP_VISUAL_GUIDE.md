# 🎯 SETUP - Forms & Email (Visual Guide)

## Step 1: Create Environment File

**Location:** Project root directory (same level as `package.json`)

**File name:** `.env.local`

**Contents:**
```
EMAIL_HOST=mail.ultracomnetworks.pk
EMAIL_PORT=587
EMAIL_USER=sales@ultracomnetworks.pk
EMAIL_PASS=YOUR_PASSWORD_HERE
```

**Visual:**
```
ultracomnetworks/
├── src/
├── public/
├── .env.local          ← Create this file
├── package.json
├── tsconfig.json
└── ... other files
```

---

## Step 2: Get Your Email Password

### From cPanel:

1. **Login to cPanel**
   - Go to your hosting provider's cPanel
   - Enter your credentials

2. **Go to Email Accounts**
   - Look for "Email Accounts" section
   - Should be under "Email" section

3. **Find sales@ultracomnetworks.pk**
   - Find your email in the list
   - Click "Configure Mail Client" button

4. **Copy SMTP Password**
   - Look for "SMTP Password" section
   - Copy the password shown
   - This is your EMAIL_PASS value

5. **Paste into .env.local**
   ```
   EMAIL_PASS=your_copied_password_here
   ```

---

## Step 3: Restart Development Server

**In Terminal:**
```bash
# Stop the current server
Ctrl + C

# Start it again
npm run dev
```

**Expected Output:**
```
> next dev
  ▲ Next.js 16.0.7
  - Local:        http://localhost:3000
  ✓ Ready in 2.1s
```

---

## Step 4: Test Navbar Form

**In Browser:**

1. Open http://localhost:3000
2. Look at top right → "Book Schedule Now" button
3. Click it
4. Modal form appears

**Fill in form:**
```
Name:    Test User
Email:   test@example.com
Phone:   +92 3001234567
Message: Testing form submission
```

5. Click "Submit Request"
6. Wait for success message
7. Check email inbox at sales@ultracomnetworks.pk

**You should see email in inbox!**

---

## Step 5: Test Contact Page

**In Browser:**

1. Go to http://localhost:3000/contactus
2. Fill contact form:
   ```
   Name:     Test User
   Company:  Test Company
   Email:    test@example.com
   Phone:    +92 3001234567
   Message:  Testing contact form
   ```
3. Click "SEND MESSAGE"
4. Success message appears
5. Check inbox for email

---

## ✅ What You Should See

### Success Response:
```
✓ Consultation request sent! We'll contact you soon.
```

### Email Received:
```
FROM: test@example.com
TO: sales@ultracomnetworks.pk
SUBJECT: Appointment Request: Free Consultation - Test User

---
New Appointment Request

Name: Test User
Email: test@example.com
Phone: +92 3001234567
Message: Testing form submission
```

---

## 🔍 Checking if Everything Works

### Browser Console Check:
1. Open DevTools (F12)
2. Go to "Network" tab
3. Submit form
4. Should see POST to `/api/form`
5. Status should be 200 (green)
6. Response: `{ message: "Message sent successfully!" }`

### Terminal Check:
When form submitted, terminal should show:
```
POST /api/form 200 OK
```

### Email Check:
1. Login to email account
2. Check inbox for new emails
3. If not there, check spam folder
4. Sender will be user's email (replyTo)
5. To address: sales@ultracomnetworks.pk

---

## 🚨 If Something Doesn't Work

### "Failed to send email" Error?
✓ Check .env.local exists
✓ Check EMAIL_PASS is correct
✓ Restart server
✓ Clear browser cache (Ctrl+Shift+Del)

### Email doesn't arrive?
✓ Check spam/junk folder
✓ Verify EMAIL_PASS is exactly right
✓ Check if email account is enabled in cPanel
✓ Try different email to test

### Form doesn't submit?
✓ Check browser console (F12) for errors
✓ Check network tab for API response
✓ Fill all required fields
✓ Check for red error messages

### Form shows "loading..." forever?
✓ Restart dev server
✓ Check .env.local is saved
✓ Refresh page (Ctrl+R)
✓ Check network requests (F12)

---

## 📱 Test on Mobile

1. On same network, get your computer IP
   ```bash
   # Windows: ipconfig
   # Mac/Linux: ifconfig
   ```

2. On mobile, visit:
   ```
   http://your-ip:3000
   ```

3. Test form submission
4. Should work same as desktop

---

## 🎨 Form Layouts

### Navbar Modal Form
```
┌─────────────────────────┐
│ Book Free Consultation  │
│                    [X]  │
├─────────────────────────┤
│ Your Name               │
│ [                    ]  │
│                         │
│ Email Address           │
│ [                    ]  │
│                         │
│ Phone Number            │
│ [                    ]  │
│                         │
│ Your Message            │
│ [                    ]  │
│ [                    ]  │
│ [                    ]  │
│                         │
│  [Submit Request]       │
└─────────────────────────┘
```

### Contact Page Form
```
┌─────────────────────────────────────┐
│ Talk about your needs                │
├─────────────────────────────────────┤
│ Your Name                             │
│ [                                  ]  │
│                                       │
│ Company Name                          │
│ [                                  ]  │
│                                       │
│ Email Address                         │
│ [                                  ]  │
│                                       │
│ Phone Number                          │
│ [                                  ]  │
│                                       │
│ Tell us about your project...         │
│ [                                  ]  │
│ [                                  ]  │
│ [                                  ]  │
│                                       │
│  [SEND MESSAGE]                       │
└─────────────────────────────────────┘
```

---

## 📊 Data Flow

```
User Input
    ↓
Form Validation (Client)
    ↓
Submit to /api/form (POST)
    ↓
Server Receives Request
    ↓
Validate Data (Server)
    ↓
Connect to SMTP (Nodemailer)
    ↓
Send Email
    ↓
Return Success/Error
    ↓
Show Message to User
    ↓
Email Arrives in Inbox
```

---

## 💾 File Structure

```
Your Email Password Flow:
┌──────────────────────────────┐
│ cPanel Email Account          │
│ sales@ultracomnetworks.pk    │
│ Password: abc123...           │
└──────────────┬───────────────┘
               │
      (copy password)
               │
┌──────────────▼───────────────┐
│ .env.local (SECRET FILE)      │
│ EMAIL_PASS=abc123...          │
│ (Never commit to git)         │
└──────────────┬───────────────┘
               │
      (used by server)
               │
┌──────────────▼───────────────┐
│ /api/form/route.ts            │
│ Creates Nodemailer transporter│
│ Sends Emails                  │
└───────────────────────────────┘
```

---

## 🎓 Learning Resources

### Nodemailer Docs:
- https://nodemailer.com/

### cPanel Email Setup:
- https://docs.cpanel.net/cpanel/

### NextJS API Routes:
- https://nextjs.org/docs/api-routes

---

## ✨ You're Done!

Once you follow these steps:
✅ Forms will work
✅ Emails will send
✅ Everything connected

**Time needed**: 5 minutes
**Difficulty**: Easy
**Result**: Fully functional contact forms!

---

## 📞 Summary

| Item | Action |
|------|--------|
| Create file | `.env.local` in project root |
| Get password | From cPanel Email Accounts |
| Paste values | EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS |
| Restart | npm run dev |
| Test | Click "Book Schedule Now" button |
| Verify | Check email inbox |

**That's it! Everything works!**
