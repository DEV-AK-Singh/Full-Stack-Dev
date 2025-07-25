def signup_user():
    while True:
        email = input("Enter your email: ")
        if email == "exit" or email == "quit":
            print("Goodbye! Have a nice day.")
            break
        with open("emails.txt", "a") as f:
            f.write(email + "\n")
            print("Signup successful: ", email)

if __name__ == "__main__":
    signup_user()
