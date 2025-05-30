from flask import Flask, render_template, request
import json
app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template("profile.html")

@app.route("/contato", methods=["POST"])
def salvar_dados():
    dados_form = request.form.to_dict()
    print(dados_form)
    try:
        with open(file="data/leads.json", mode="r", encoding="utf-8") as file:
            dados_leads = json.load(file)
    except FileNotFoundError:
        with open(file="data/leads.json", mode="w", encoding="utf-8") as file:
            dados_leads = {}
    dados_leads.update(dados_form)
    with open(file="data/leads.json", mode="w", encoding="utf-8") as file:
        json.dump(dados_leads, file)
            
    return render_template("confirmation.html")

if __name__ == "__main__":
    app.run(debug=True)
