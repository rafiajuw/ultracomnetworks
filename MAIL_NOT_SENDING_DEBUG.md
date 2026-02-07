# 🔧 Email Troubleshooting - Debug Guide

## ❌ Current Issue: .env.local Not Found

### What's Missing:
- `.env.local` file not created in project root
- EMAIL_PASS (password) not configured
- Server using empty password = emails can't send

### Solution: Create .env.local

**File Location**: Project root (same level as package.json)

**Required Contents**:
```
EMAIL_HOST=mail.ultracomnetworks.pk
EMAIL_PORT=587
EMAIL_USER=sales@ultracomnetworks.pk
EMAIL_PASS=YOUR_CPANEL_PASSWORD_HERE
```

## 📋 Steps to Fix:

### Step 1: Get cPanel Email Password
1. Login to cPanel
2. Go to "Email Accounts" section
3. Find email: sales@ultracomnetworks.pk
4. Click "Configure Mail Client"
5. Copy the SMTP password shown

### Step 2: Create .env.local
Create new file in project root called `.env.local`

### Step 3: Paste Email Settings
```
EMAIL_HOST=mail.ultracomnetworks.pk
EMAIL_PORT=587
EMAIL_USER=sales@ultracomnetworks.pk
EMAIL_PASS=paste_your_cpanel_password_here
```

### Step 4: Restart Server
```bash
npm run dev
```

### Step 5: Test Form
- Click "Book Schedule Now"
- Submit form
- Check email inbox

## 🔍 How to Verify It Works:

### Browser Console Check:
1. Open DevTools (F12)
2. Go to Network tab
3. Submit form
4. Look for POST request to `/api/form`
5. Should return status 200 with success message

### Terminal Check:
When form submits, terminal should show:
```
POST /api/form 200 OK
```

### Email Confirmation:
Email should arrive at: **sales@ultracomnetworks.pk**

## 🆘 If Still Not Working:

Check 1: .env.local exists?
```
✓ File should be in project root
✓ Name should be exactly .env.local (not .env)
```

Check 2: Password correct?
```
✓ Copy exactly from cPanel
✓ No extra spaces
✓ Case sensitive if needed
```

Check 3: Server restarted?
```bash
# Press Ctrl+C to stop
# Then run:
npm run dev
```

Check 4: Wrong endpoint?
```
✓ Contact form: should use /api/form
✓ Not /api/contact
✓ Not /api/email
```

## 📞 Alternative: Use Gmail

If cPanel email not working, try Gmail:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

**Get Gmail App Password:**
1. Go to myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Copy the password shown
4. Use it as EMAIL_PASS

## ✅ Checklist:

- [ ] cPanel email password copied
- [ ] .env.local file created in project root
- [ ] All 4 email settings added
- [ ] Server restarted (npm run dev)
- [ ] Tested form submission
- [ ] Email received in inbox

Once you complete these steps, emails will work! 🎉
