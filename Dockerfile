# Use official Nginx image
FROM nginx:latest

# Copy built React files to Nginx HTML directory
COPY dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

