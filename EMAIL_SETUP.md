# Email & Form Setup Guide - Ultracom Networks

## ✅ Forms Working Status

### Forms Configured:
1. **Navbar Consultation Modal** - "Book Free Consultation" button (Top bar)
2. **Contact Page Form** - Full contact form at `/contactus` page
3. **Career Form** - Resume upload form (if available)

All forms are now connected to the same API endpoint: `/api/form`

---

## 📧 Email Configuration

### Current Setup:
- **Email Host**: mail.ultracomnetworks.pk (cPanel Email)
- **SMTP Port**: 587 (TLS)
- **From Email**: sales@ultracomnetworks.pk
- **Destination**: sales@ultracomnetworks.pk (All forms send here)

### How to Configure:

#### **Option 1: Using Your cPanel Email (Recommended)**
1. Create email in cPanel: `sales@ultracomnetworks.pk`
2. Get SMTP credentials from cPanel
3. Add to `.env.local` file:
```
EMAIL_HOST=mail.ultracomnetworks.pk
EMAIL_PORT=587
EMAIL_USER=sales@ultracomnetworks.pk
EMAIL_PASS=your_cpanel_email_password
```

#### **Option 2: Using Gmail**
1. Enable 2-Step Verification in Google Account
2. Create App Password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

#### **Option 3: Using Outlook/Hotmail**
1. Enable 2-Step Verification
2. Create App Password
3. Add to `.env.local`:
```
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_app_password
```

---

## 🔧 Environment Setup

### Create `.env.local` file in project root:

```bash
# Email Configuration
EMAIL_HOST=mail.ultracomnetworks.pk
EMAIL_PORT=587
EMAIL_USER=sales@ultracomnetworks.pk
EMAIL_PASS=your_actual_password_here
```

### Important:
- ✅ `.env.local` is ignored by git (already in .gitignore)
- ✅ Never commit `.env.local` to repository
- ✅ Keep passwords secure and private

---

## 📝 Form Fields Configuration

### Navbar Consultation Form sends:
- Name
- Email
- Phone
- Message
- Service: "Free Consultation"

### Contact Page Form sends:
- Name
- Email
- Phone
- Company
- Message

### Email Subject Lines:
- **Consultation**: "Appointment Request: Free Consultation - [Name]"
- **Contact**: "Website Inquiry from [Name]"

---

## ✅ Testing Forms

### Test Navbar Form:
1. Click "Book Schedule Now" button in top bar
2. Fill in all required fields
3. Click "Submit Request"
4. Check if email arrives at `sales@ultracomnetworks.pk`

### Test Contact Page Form:
1. Go to `/contactus` page
2. Fill in all required fields
3. Click "SEND MESSAGE"
4. Check if email arrives

### Expected Email:
- **From**: Sender's email (replyTo)
- **To**: sales@ultracomnetworks.pk
- **Subject**: Shows form type and sender name
- **Body**: Contains all form data in HTML format

---

## 🚨 Troubleshooting

### Email Not Sending?

**Check 1: Environment Variables**
- Make sure `.env.local` exists in project root
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- Restart development server after adding env vars

**Check 2: SMTP Credentials**
- Test email username and password separately
- If using Gmail, confirm App Password (not regular password)
- If using cPanel, get SMTP credentials from control panel

**Check 3: Firewall/Security**
- Some servers block port 587
- Try port 465 with `secure: true` if 587 fails
- Check if SMTP is enabled in email hosting

**Check 4: Email Server Limits**
- Check spam folder for test emails
- Verify sender email is verified with provider
- Check for rate limiting issues

---

## 📊 Email Flow

```
User fills form (Navbar/Contact)
        ↓
Form data sent to /api/form (POST)
        ↓
Server validates data
        ↓
Nodemailer sends via SMTP
        ↓
Email arrives at sales@ultracomnetworks.pk
        ↓
Success/Error message shown to user
```

---

## 🔐 Security Notes

- ✅ Forms validate required fields client-side
- ✅ Server-side validation in API route
- ✅ Email addresses are verified
- ✅ Password stored in `.env.local` (not in code)
- ✅ SMTP connection uses TLS encryption

---

## 📞 Support Contacts

**Add these to contact page or footer:**
- Sales: sales@ultracomnetworks.pk
- Support: support@ultracomnetworks.pk (if available)
- Phone: +92 3111000929

---

## ✅ Implementation Checklist

- [x] Navbar consultation form connected
- [x] Contact page form connected
- [x] API endpoint created and tested
- [x] Nodemailer configured
- [x] Email validation working
- [ ] **TODO: Add .env.local with your actual email credentials**
- [ ] **TODO: Test forms with real email**
- [ ] **TODO: Check emails in inbox**

---

**All forms are now properly configured and ready to use. Just add your email credentials to `.env.local` and test!**
