# ZAP BAZAAR - AI Phone Recommendation System

A modern, minimalist e-commerce website for mobile phones and laptops with an intelligent AI chat bot that provides personalized phone recommendations using Google Gemini API.

## 🚀 Features

### **Core Features**
- **Mobile Phone Catalog**: Comprehensive collection of smartphones from top brands
- **Laptop Section**: Premium laptop offerings from leading manufacturers
- **Search Functionality**: Real-time search and filtering
- **Interactive Elements**: Like, dislike, comment, and compare features
- **Responsive Design**: Mobile-first, minimalist UI design

### **AI Chat Bot Features**
- **🤖 Floating AI Bot**: Always accessible chat interface
- **Smart Recommendations**: Budget and priority-based phone suggestions
- **Quick Options**: Pre-defined queries for common needs
- **Custom Inputs**: Detailed budget and priority selection
- **Real-time Chat**: Interactive conversation with AI advisor

## 🛠️ Setup Instructions

### **1. Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key
- Basic knowledge of HTML, CSS, and JavaScript

### **2. Google Gemini API Setup**

#### **Step 1: Get API Key**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

#### **Step 2: Configure API Key**
1. Open `gemini-config.js`
2. Replace `'YOUR_API_KEY'` with your actual API key:
   ```javascript
   const GEMINI_API_KEY = 'your_actual_api_key_here';
   ```

### **3. File Structure**
```
zap-bazaar/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── script.js               # JavaScript functionality
├── gemini-config.js        # Gemini API configuration
├── assets/                 # Image assets folder
│   ├── background.jpg
│   ├── iphone 15 pro.jpg
│   ├── samsung galaxy s23.jpg
│   └── ... (other images)
└── README.md               # This file
```

### **4. Running the Application**
1. **Local Development**:
   - Open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

2. **Production Deployment**:
   - Upload all files to your web hosting service
   - Ensure `gemini-config.js` has the correct API key
   - Test the AI chat bot functionality

## 🎯 AI Chat Bot Usage

### **Quick Start**
1. Click the floating 🤖 bot icon (bottom-right corner)
2. Choose from quick options or use custom inputs
3. Select your budget range and priority feature
4. Click "Get AI Recommendation"

### **Quick Options Available**
- **Budget under ₹20,000**: Affordable phone recommendations
- **Best camera phone**: Photography-focused suggestions
- **Gaming phone**: Performance and gaming optimized
- **Long battery life**: Battery-focused recommendations

### **Custom Inputs**
- **Budget Range**: 6 different budget categories
- **Priority Features**: Camera, Performance, Battery, Gaming, Design, Value

## 🔧 Customization

### **Adding New Phones**
1. Open `index.html`
2. Add new phone items in the appropriate section
3. Update the phone database in `script.js`

### **Modifying AI Responses**
1. Edit `simulateGeminiAPI()` function in `script.js`
2. Customize recommendation logic
3. Add new response patterns

### **Styling Changes**
1. Modify `styles.css`
2. Update color schemes, layouts, and animations
3. Ensure responsive design compatibility

## 🌐 API Integration

### **Current Implementation**
- **Simulated API**: Demo responses for testing
- **Gemini Ready**: Full API integration code included
- **Error Handling**: Comprehensive error management

### **Production Deployment**
1. Ensure valid Gemini API key
2. Replace `simulateGeminiAPI()` with `callGeminiAPI()`
3. Test API rate limits and quotas
4. Monitor API usage and costs

## 📱 Responsive Design

### **Breakpoints**
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

### **Features**
- Mobile-first design approach
- Touch-friendly interface
- Optimized for all screen sizes
- Smooth animations and transitions

## 🎨 Design System

### **Color Palette**
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #667eea (Purple)
- **Background**: #fafafa (Light Gray)
- **Text**: #1a1a1a (Dark Gray)
- **Accent**: #22c55e (Green)

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Responsive**: Scalable font sizes

### **Components**
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Hover effects, smooth transitions
- **Forms**: Focus states, validation feedback
- **Chat**: Message bubbles, loading animations

## 🚨 Troubleshooting

### **Common Issues**

#### **AI Chat Bot Not Working**
1. Check browser console for errors
2. Verify API key configuration
3. Ensure all JavaScript files are loaded
4. Check internet connection

#### **Images Not Displaying**
1. Verify `assets/` folder structure
2. Check image file names and extensions
3. Ensure correct file paths in HTML

#### **Styling Issues**
1. Clear browser cache
2. Check CSS file loading
3. Verify file paths and syntax

### **Debug Mode**
Enable console logging by adding:
```javascript
const DEBUG_MODE = true;
```

## 🔒 Security Considerations

### **API Key Protection**
- Never commit API keys to public repositories
- Use environment variables in production
- Implement rate limiting
- Monitor API usage

### **Data Privacy**
- No user data is stored permanently
- Chat history is session-based
- Implement GDPR compliance if needed

## 📈 Performance Optimization

### **Best Practices**
- Optimize image sizes
- Minify CSS and JavaScript
- Use CDN for external resources
- Implement lazy loading

### **Monitoring**
- Track API response times
- Monitor user engagement
- Analyze chat bot usage patterns

## 🤝 Contributing

### **Guidelines**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Areas for Improvement**
- Add more phone models
- Enhance AI recommendation logic
- Improve mobile responsiveness
- Add user authentication
- Implement shopping cart

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the documentation

---

**Made with ❤️ for the ZAP BAZAAR community**
