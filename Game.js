alert ("Welkom bij The Game.");
alert ("Jij maakt hier de keuzes...");
alert ("Laten we gaan beginnen.");



var vraag1 = prompt ("Heb je zin in The Game?");
vraag1 = vraag1.toLowerCase();

if (vraag1 == "ja") {
	alert ("Mooi zo, dan gaan we nu echt beginnen ;)");
	var vraag2 = prompt ("Waar wil je beginnen? in een dorp of in de stad? (deze zijn beide in het buitenland)");
	vraag2 = vraag2.toLowerCase();

	if (vraag2 == "in een dorp") {
		alert ("Oke, dan beginnen we in een dorp.");
		alert ("Het dorp is erg afgelegen en er zijn geen andere mensen.");
		alert ("Je gaat er worden gedropt. Je hebt keuze uit 3 wapens om mee te nemen.");
		var vraag3 = prompt ("Wil je een ak-47, een X-boog of een RPG meenemen?");
		vraag3 = vraag3.toLowerCase();

		if (vraag3 == "ak-47") {
			alert ("Oke, goede keuze.");
			alert ("Je ben inmiddels gedropt in het dorp.");
			alert ("Er komen 20 zombies, gelukkig heb je de ak-47 bij je, gebruik deze om de zombies neer te schieten.");
			var vraag4 = prompt ("hoeveel zombies heb je neergeschoten?");

			if (vraag4 == "20") {
				alert ("Goed gedaan, je leeft nog en hebt alle zombies gedood.");
				var vraag6 = prompt ("Jij mag weer kiezen, wil je naar het noorden lopen of naar het zuiden? (vul noorden of zuiden in.)");
				vraag6 = vraag6.toLowerCase();

				if (vraag6 == "noorden") {
					alert ("Oke, dan gaan we naar het noorden.");
					alert ("In het noorden is er een groter dorp waar wel mensen leven.");
					var vraag7 = prompt ("wil je geld of eten meenemen?");
					vraag7 = vraag7toLowerCase();

					if (vraag7 == "geld") {
						alert ("Helaas, in dit dorp gebruiken ze een andere munteenheid.");
						alert ("Jammer dat je deze fout maakt, je was net zo lekker bezig...");
						alert("Maar ik moet streng zijn, dus je moet helaas opnieuw beginnen.");
						document.write ("Herstart de pagina om opnieuw te proberen.");
					}
					else if (vraag7 == "eten") {
						alert ("Goede keuze, aangezien je in dit dorp niet met onze munteenheid kan betalen heb je niets aan geld.");
						alert ("Nu ben je in grotere dorp. Alle mensen kijken je vreemd aan.");
						var vraag8 = prompt ("Je kan nu kiezen: stel ik mijzelf voor of loop ik gewoon door zonder iets te zeggen? (vul in: voorstellen of doorlopen.)");
						vraag8 = vraag8.toLowerCase();

						if (vraag8 == "doorlopen") {
							alert ("Waarom ben je zo onbeleefd?");
							alert ("Ze vertrouwen je niet en pakken je op.");
							alert ("Helaas, je was zo goed bezin, maar je moet toch echt weer opnieuw beginnen.");
							document.write ("Herstart de pagina om opnieuw te proberen.");
						}
						else if (vraag8 == "voorstellen") {
							alert ("Goed gekozen, ze vertrouwen je nu en geven je toegang tot het dorp.");
							alert ("je bent nu bijna klaar. Je moet alleen nog de code kraken om terug naar huis te kunnen.");
							var vraag9 = prompt ("los dit op: wat is 9 × 9 × 2 - 15 × 2?");

							if (vraag9 == "132") {
								alert ("goed gedaan, je hebt de opdracht voltooid. Je wordt nu opgehaalt en thuis gebracht.");
								alert ("Dit was The Game.");
								document.write ("Goed gedaan, je hebt gewonnen!");
							}						
						}
						else {
							alert ("Ik zei nog zo, vul alleen voorstellen of doorlopen in.");
							alert ("Begin maar weer opnieuw...");
							document.write ("Herstart de pagina om opnieuw te proberen.");
						}
					}
					else {
						alert ("Hoe moeilijk is het om geld of eten in te vullen?");
						alert ("Begin opnieuw.");
						document.write ("Herstart de pagina om opnieuw te proberen.");
					}
				}
				else if (vraag6 == "zuiden"); {
					alert ("Oke, dan gaan we naar het zuiden.");
					alert ("In het zuiden is een boerderij van iemand. Deze persoon is toevallig aanwezig.");
					alert ("Hij is alleen niet zo gewend aan nieuwe mensen, dus hij schok erg van jou komst.");
					alert ("Hij schiet jou neer...");
					alert ("Dit betekend dat je weer opnieuw moet beginnen...");
					document.write ("Herstart de pagina om opnieuw te proberen.");
				}
				else {
					alert ("Ik zei toch dat je moest antwoorden met noorden of zuiden!");
					alert ("omdat je niet luisterd begin je maar weer opnieuw.");
					document.write ("Herstart de pagina om opnieuw te proberen.");

				}
			}
			else if (vraag4 < "20") {
				alert("Helaas, je hebt niet alle zombies gedood.");
				alert ("volgende keer beter.");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
			else if (vraag4 > "20") {
				alert ("Dat is knap en een beetje vreemd, er waren 20 zombies en je hebt er meer gedood...");
				alert ("Volgende keer beter nadenken ;D");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
			else {
				alert ("Vul bij deze vraag alleen een getal in.");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
		}
		else if (vraag3 == "x-boog") {
			alert ("Oke, redelijke keuze");
			alert ("Je hebt 15 pijlen in je X-boog.");
			alert ("je bent inmiddels gedropt in het dorp.");
			alert ("Er komen 20 zombies aan...");
			alert ("ohhja, was ik vergeten te vertellen. In dit dorp waren geen mensen mar wel zombies. SORRY ;D");
			alert ("Maar er is een kans, je hebt een X-boog, gebruik deze om de zombies te doden.");
			var vraag5 = prompt ("Hoeveel van de zombie heb je godood?");
			vraag5 = vraag5.toLowerCase()

			if (vraag5 == "15") {
				alert ("Helaas, je hebt niet alle zombies gedood.");
				alert ("Begin opnieuw");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
			else if (vraag5 < "15") {
				alert("Helaas, je hebt niet alle zombies gedood.");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
			else if (vraag5 > "15") {
				alert ("Dat is erbg knap met alleen maar 15 pijlen...");
				alert ("Jij bent zo goed dat je opnieuw moet beginnen xD");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
			else {
				alert ("vul bij deze vraag alleen een getal in.");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}

		}
		else if (vraag3 == "een rpg" || "rpg") {
			alert ("Oke, slechte keuze.");
			alert ("Een RPG duurt erg lang om te herladen.");
			alert ("Daardoor het je te weinig tijd om de zombies neer te schieten.");
			alert ("ohhja, dat was ik vergeten, er zijn geen mensen maar wel zombie in het dorp...");
			alert ("Volgende keer beter.");
			document.write ("Herstart de pagina om opnieuw te proberen.");
		}
	}
	else if (vraag2 == "in een stad") {
			alert ("Oke, dan beginnen we in een stad.");
			alert ("Je bent nu gedropt in een stad, er zijn veel mensen en ze kijken je allemaal een beetje vreemd aan.");
			alert ("Je moet naar het ziekenhuis, maar je weet niet waar die is.");
			var vraag10 = prompt ("Ga je aan iemand de weg vragen of ga je het zelf uitzoeken? (antwoord met: 'de weg vragen' of 'zelf uitzoeken'");
			vraag10 = vraag10.toLowerCase();

			if (vraag10 == "de weg vragen") {
				alert ("Dat is niet handig, want ze vertrouwde je al niet. Ze sluiten je nu op en je kan niet meer weg.");
				alert ("begin opnieuw.");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
			else if (vraag10 == "zelf uitzoeken") {
				alert ("Goed gekozen, ze vertrouwede je al niet en vragen is dan niet handig.");
				alert ("Na 3 uur zoeken heb je het ziekenhuis gevonden.");
				alert ("Je gaat naar binnen om te vragen voor medicijnen tegen hoofdpijn.");
				var vraag11 = prompt ("Ga je naar binnen voor de medicijnen?");
				vraag11 = vraag11.toLowerCase();

				if (vraag11 == "ja") {
					alert ("Haha, ze verkopen helemaal geen medicijnen in het ziekenhuis...");
					alert ("weer een foutje gemaakt. Begin opnieuw.");
					document.write ("Herstart de pagina om opnieuw te proberen.");
				}
				else if (vraag11 == "nee") {
					alert ("Nu ben je overleden aan hoofdpijn...");
					alert ("Is dat niet mogelijk?");
					alert ("ohh dat is dan mij fout...");
					var vraag12 = prompt ("wil je doorgaan?");
					vraag12 = vraag12.toLowerCase();

					if (vraag12 == "ja") {
						alert ("Helaas, het spel gaat hier niet door.");
						alert ("misschien heb je eerder een verkerde keuze gemaakt...");
						alert ("begin opnieuw.");
						document.write ("Herstart de pagina om opnieuw te proberen.");
					}
					else if (vraag12 == "nee") {
						alert ("Dat komt mooi uit, we ginen toch al niet verder.");
						document.write ("Herstart de pagina om opnieuw te proberen.");
					}
					else {
						alert ("Vul ja of nee in...").
						document.write ("Herstart de pagina om opnieuw te proberen.");
					}
				}
				else {
					alert("Vul ja of nee in...");
					document.write ("Herstart de pagina om opnieuw te proberen.");
				}
			}
			else{
				alert ("Doe wat ik zeg en dga geen andere dingen invullen xD.");
				alert ("Nu moet je weer opnieuw beginnen, zonde van je tijd...");
				document.write ("Herstart de pagina om opnieuw te proberen.");
			}
	}
	else {
		alert ("Vul 'in een stad' of 'in een dorp in'.");
		document.write ("Herstart de pagina om opnieuw te proberen.");
	}
}
else if (vraag1 == "nee") {
	alert ("Dat is jammer, dan speel je maar niet :(");
	document.write ("Jammer dat je er geen zin in hebt. Herstart de pagina om opnieuw te proberen.");
}
else {
	alert ("Vul bij deze vraag alleen ja of nee in!");
	document.write ("Herstart de pagina om opnieuw te proberen.");
}