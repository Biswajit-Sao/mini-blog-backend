# 1. Install modules
npm install

# 2. Create .env file
echo "PORT=4000" >> .env
echo "MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/<db>?retryWrites=true&w=majority" >> .env

# 3. Run the app
node index.js
