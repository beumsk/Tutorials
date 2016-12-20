HYPERTEXT PREPROCESSOR
	-Server Scripting
		-by Beumsk


// To create a comment. Shown in code only. Indent 2spaces
/* Multiple line comment */

<?php ?> or <? ?> // PHP tags

<?php echo "texte qui sera écrit"; ?>
<?php print "texte qui sera écrit"; ?>
<?php include("fichier.php"); ?>

// VARIABLES

<?php $nom_du_visiteur = "Beumsk"; ?>       // string = "du texte"
<?php $age_du_visiteur = 22; ?>             // int = 42
<?php $poids_du_isiteur = 73.5; ?>          // float = 42.98
<?php $je_suis_un_zero = true; ?>           // bool = true/false
<?php $pas_de_valeur = null; ?>             // NULL = rien

<?php echo 'Le visiteur a ' . $age_du_visiteur . ' ans.'; ?>

<?php $nombre = (3+4-2)*8/5; ?> // nombre vaut 8
<?php 
$nombre = 10; // nombre vaut 10
$resultat = $nombre+10; // resultat vaut 20
?>
<?php $nombre = 10%3; ?> //nombre vaut 1 pcq modulo (%) calcule le reste de la division

// CONDITIONS

<?php 
$nombre = 0;
if ($nombre < 0) // AND et OR pour des conditions multiples
{
 echo "t'es un loser";
}
elseif ($nombre > 0) //plusieurs elseif sont possibles
{
	echo "t'es un bg";
}
else
{
	echo "loser ou bg?";
}
?>

<?php
$note = 10;
switch ($note) //permet de clarifier le code seulement pour tester l'égalité
{
	case 0:
		echo "footix" ;
	break;
	case 5:
		echo "loser" ;
	break;
	case 10:
		echo "mouais" ;
	break;
	case 15:
		echo "good job" ;
	break;
	case 20:
		echo "perfect!" ;
	break;
	default: //equivalent de else
		echo "trouve une cote narvalo"
}
?>

<?php
$age = 22;
if ($age >= 18)
{
	$majeur = true;
}
else
{
	$majeur = false;
}
?>

<?php //revient au meme que ci-dessus mais en plus court
$age = 22;
$majeur = ($age >=18) ? true : false;
?>

// BOUCLES

<?php
$nombre_de_lignes = 1;
while ($nombre_de_lignes <= 100)
{
	echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />' ;
	$nombre_de_lignes++; //incrémentation, on ajoute 1 à la variable
}
?>

<?php
for ($nombre_de_lignes = 1; $nombre_de_lignes <= 100; $nombre_de_lignes++) // a utiliser plutot que for quand on sait combien de fois on veut répéter
{
	echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
}
?>

// FONCTIONS

<?php
$phrase = 'La fonction permet de compte le nombre de caractères que compte cette phrase. Incroyable !';
$longueur = strlen($phrase);
	echo 'La phrase ci-dessous comporte ' . $longueur . ' caractères :<br />' . $phrase;
?>

<?php
$ma_variable = str_replace('b', 'p', 'bim bam boum');
	echo $ma_variable;
?>

<?php
$chaine = 'cette chaine va changer';
$chaine  = str_shuffle ($chaine); // strtolower pour minusculer et strtoupper pour majusculer
	echo $chaine;
?>

<?php
$jour = date ('d');
$mois = date ('m');
$année = date ('Y'); // attention aux maj
$heure = date ('H');
$minute = date ('i');
echo 'Bonjour, nous sommes le ' . $jour. '/' . $mois . '/' . $année . ' et il est exactement ' . $heure . 'h' . $minute;
?>

<?php
function direbonjour ($nom) // creation de fonction
{
	echo 'Bonjour ' . $nom . ' ! <br />';
}
direbonjour('Pierre');
direbonjour('Mathieu');
?>

<?php
function volumecone ($rayon, $hauteur)
{
	$volume = $rayon * $rayon * 3.14 * $hauteur * (1/3);
	return $volume; // indique la valeur à renvoyer, ici le volume
}
$volume = volumecone (3, 1);
echo 'Ce cone a un volume de ' . $volume . ' cm³.';
?>

// TABLEAUX ou ARRAYS

<?php
$prenom = array ('pierre', 'mathieu', 'jean'); //le tableau commence toujours à 0
echo $prenom[0] . ' et ' . $prenom[2];
?>

<?php
$coordonnees = array ('prenom' => 'Remy', 'age' => '22 ans', 'ville' => 'Bruxelles'); // tableau associatif
echo $coordonnees['prenom'] . ', ' . $coordonnees['age'] . ' de ' . $coordonnees['ville'];
?>

<?php
$prenom = array ('mathieu', 'pierre', 'andre', 'alex', 'victor');
for ($numero = 0; $numero < 5; $numero++) // montre les 5 premiers du tableau
{
	echo $prenom[$numero] . '<br />';
}
?>

<?php
$prenom = array ('felix', 'max', 'baptiste', 'simon', 'pierre', 'milan', 'florian');
foreach ($prenom as $elements) // foreach est plus adequat pour les tableaux
{
	echo $elements . '<br />';
}
?>

<?php
$coordonnees = array (
	'prenom' => 'Remy',
	'nom' => 'Beumier',
	'adresse' => '3 clos du chemin creux',
	'ville' => 'Bruxelles');
foreach($coordonnees as $cle => $element) // foreach fonctionne aussi pour tableaux associatifs
{
	echo '[' . $cle . '] : ' . $element . '<br />';
}
?>

<?php
$coordonnees = array (
	'prenom' => 'Remy',
	'nom' => 'Beumier',
	'adresse' => '3 clos du chemin creux',
	'ville' => 'Bruxelles');
echo '<pre>';
print_r ($coordonnees); // rapide façon d'afficher le contenu d'array mais oblige les <pre>
echo '<pre>';
?>

<?php
$coordonnees = array (
	'prenom' => 'Remy',
	'nom' => 'Beumier',
	'adresse' => '3 clos du chemin creux',
	'ville' => 'Bruxelles');
if (array_key_exists('nom', $coordonnees)) // la clé existe?
{
	echo 'La clé "nom" se trouve dans les coordonnées !';
}
if (array_key_exists('pays', $coordonnees))
{
	echo 'La clé "pays" se trouve dans les coordonnées !';
}
?>

<?php
$fruits = array ('banane', 'mangue', 'fraise', 'ananas', 'pomme', 'poire');
if (in_array('banane', $fruits)) // la valeur existe?
{
	echo 'La valeur banane se trouve dans les fruits.';
}
if (in_array('cerise', $fruits))
{
	echo 'la valeur cerise se trouve dans les fruits.'; 
}
?>

<?php
$fruits = array ('banane', 'mangue', 'fraise', 'ananas', 'pomme', 'poire');

$position = array_search('fraise', $fruits); // position valeur?
echo '"fraise" se trouve en position ' . $position . '<br />';

$position = array_search('Banane', $fruits);
echo '"banane" se trouve en position ' . $position ;
?>

// DONNEES URL

<a href="fichier.php?param1=valeur1&ampparam2=valeur2">Dis-moi Bonjour !</a> // la première page transmet les valeurs à la 2e
<p><?php echo $_GET['param1'] . ' ' . $_GET['param2']; ?></p> // c'est sensé être sur la 2e page

<?php
if (isset($_GET['param1']) AND isset($_GET['param2'])) // verifier que le param1 et le param2 sont là
{
echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
}
else // Il manque des paramètres, on avertit le visiteur
{
echo 'Il faut renseigner un nom et un prénom !';
}
?>

<?php
if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
{
	// 1 : On force la conversion en nombre entier
	$_GET['repeter'] = (int) $_GET['repeter']; //c'est le transtypage

	// 2 : Le nombre doit être compris entre 1 et 100 pour eviter un chargement trop long
	if ($_GET['repeter'] >= 1 AND $_GET['repeter'] <= 100) 
	{   
		for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
		{
			echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
		}
	}
}
else
{
 echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';
}
?>

// FORMULAIRES

1er fichier (form)
<form method="post" action="cible.php">
	<p>
		Quel est ton pseudo ? <br />
		<input type="text" name="pseudo" value="footix"/>
	</p>
	<p>
		Un avis sur le site ? <br />
		<textarea name="avis" rows="8" cols="45"></textarea>
	</p>
	<p>
		Quel est ton genre ? <br />
		<select name="choix">
			<option value="homme">Homme</option>
			<option value="femme">Femme</option>
			<option value="autre">Autre</option>
		</select>
	</p>
	<p>
		Choisis un langage <br/>
		<input type="checkbox" name="lang" id="html" /> <label for="html">HTML</label><br /> // label permet de cliquer sur le texte pour choisir
		<input type="checkbox" name="lang" id="css" /> <label for="css">CSS</label><br/> // c'est donc plus ergonomique
		<input type="checkbox" name="lang" id="php" /> <label for="php">PHP</label><br/>
		<input type="checkbox" name="lang" id="mysql" /> <label for="mysql">MySQL</label><br/>
	</p>
	<p>
		Aimes-tu coder ?<br/>
		<input type="radio" name="coder" value="oui" id="oui" checked="checked" /> <label for="oui">Oui</label>
		<input type="radio" name="coder" value="non" id="non" /> <label for="non">Non</label>
		<input type="radio" name="coder" value="bof" id="bof" /> <label for="bof">Bof</label>
	</p>
	<p>
		<input type="hidden" name="cache" value="MDR" /> // champs caché
	</p>
	<p><input type="submit" value="Valider"/></p> // bouton valider
</form>

2e fichier (cible)
<p>Bonjour !</p>
<p>Quel bon choix de pseudo, <?php echo $_POST['pseudo']; ?> !</p>
<p>Ton avis : " <?php echo ($_POST['avis']); ?> " </p> // html dans le champ sera interpreté (attention danger)
<p>Ton avis : " <?php echo htmlspecialchars ($_POST['avis']); ?> " </p> // html dans le champ sera pas interpreté
<p>Ton avis : " <?php echo strip_tags ($_POST['avis']); ?> " </p> // html dans le champ sera supprimé
<p>Tu fais partie des <?php echo $_POST['choix']; ?>s </p>
<p>Tu sais coder : <?php echo $_POST['lang']; ?> </p>
<p>Tu aimes coder : <?php echo $_POST['coder']; ?> </p>
<p><?php echo $_POST['cache'] ?> </p>
<p></p>
<p>Si tu veux changer quelque chose dans ton formulaire, <a href="formulaire.php">clique ici</a></p>

ENVOI DE FICHIER

<!-- à faire chapitre 2.2 -->

PROTECTION PAGE MDP

1er fichier (form_secret)
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Page protégée par mdp</title>
	</head>
	<body>
		<form method="post" action="secret.php">
			<p>Veuillez taper le mot de passe pour accéder aux informations.</p>
			<input type="password" name="mdp"/>
			<input type="submit" value="OK"/>
		</form>
	</body>
</html>  

2e fichier (secret)
<!DOCTYPE html>
<html>
	<head>
			<meta charset="utf-8"/>
			<title>Page secrète !</title>
	</head>
	<body>
			
		<?php 
		if (isset($_POST['mdp']) AND $_POST['mdp'] ==  "kangourou") 
		{ 
		?>
			<h1>Bienvenue sur cette page réservée au personnel de la Nasa.</h1> <!--préférable de fermer la balise php en cas de texte long-->
			<p>Voici les codes d'accès :</p>
			<p><strong>4509_2493_5974_2376</strong></p>
		<?php
		}
		else 
		{
			echo '<p>Mot de passe incorrect.</p>'; //ici, on ne ferme pas la balise car il est plus rapide d'utiliser echo
		}
		?>
	</body>
</html>

En 1 seul fichier
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Infos secretes</title>
	</head>
	<body>
		<?php
			if (!isset($_POST['mdp']) OR $_POST['mdp'] != 'kangourou') // faire l'opposé de la commande grâce à "!" ex: !isset ou !=
			{
				echo '<form method="post" action="work.php">
								<p>Veuillez entrer le mot de passe</p>
								<input type="password" name="mdp"/>
								<input type="submit" value="OK"/>
							</form>';
			}
	
			elseif (isset($_POST['mdp']) AND $_POST['mdp'] != 'kangourou') // probleme : elseif ne fonctionne pas. PQ?
			{
				echo '<p>Mot de passe incorrect<p>';
			}
	
			else
			{
				echo '<p>INFOS SECRETES !<p>';
			}
		?>
			
	</body>
</html>

VARIABLES SUPERGLOBALES

<pre> 
	<?php
	print_r($_GET); // permet d'afficher le contenu d'une superglobale
	?>
</pre>

$_SERVER['REMOTE_ADDR'] // valeurs renvoyées par le serveur, ici l'adresse IP
$_SESSION // variables d'une session
$_COOKIE // cookie visiteur
$_GET // données envoyées en paramètre dns l'URL
$_POST // données envoyées via formulaire
$_FILES // fichiers envoyés via formulaire

Session
<?php
session_start(); // toujours avant le code html
$_SESSION['prenom'] = Rémy; // peu importe la place, ces variables seront enregistrées le temps de la session
$_SESSION['nom'] = Beumier;
$_SESSION['age'] = 22;
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>MDR</title>
	</head>
	<body>
		<p>Salut <?php echo $_SESSION['prenom']; echo $_SESSION['nom']; echo $_SESSION['age'] ?> !</p>
			<!-- Si l'utilisateur change de page, il gardera ses variables -->
	</body>
</html>

Cookies
<?php setcookie('pseudo', 'M@teo21', time() + 365*24*3600); ?> // nom, valeur, time(mnt) + durée voulue (1an ici)
<?php setcookie('pseudo', 'M@teo21', time() + 365*24*3600, null, null, false, true); ?> // le dernier paramète sécurise le cookie en httpOnly

<?php
setcookie('pseudo', 'Beumsk', time() + 365*24*3600, null, null, false, true); // A nouveau, comme pour session_start, 
setcookie('pays', 'Belgique', time() + 365*24*3600, null, null, false, true); // il faut écrire cette fonction avant le code html !
// setcookie permet d'écraser un ancien cookie pour remplacer sa valeur
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Ma super page PHP</title>
	</head>
	<body>
		<p>
			Hé ! Je me souviens de toi !<br />
			Tu t'appelles <?php echo $_COOKIE['pseudo']; ?> et tu viens de <?php echo $_COOKIE['pays']; ?> c'est bien ça ?
			<!--importance de l'isset pour vérifier que le cookie existe-->
		</p>
	</body>
</html>

LIRE dans un fichier

<?php
// 1 : on ouvre le fichier
$monfichier = fopen('compteur.txt', 'r+'); // r=lecture, r+=lecture&ecriture, a=ecriture (créé si fichier inexistant), a+=lecture&ecriture (créé)

// 2 : on fera ici nos opérations sur le fichier...
$ligne = fgets($monfichier); // lire une ligne --> pour plusieurs on fait appel aux boucles (base de données si beaucoup d'infos)
$ligne = fgetc($monfichier); // lire un caractère 

// 3 : quand on a fini de l'utiliser, on ferme le fichier
fclose($monfichier);
?>

ECRIRE dans un fichier

<?php fputs($monfichier, 'Texte à écrire'); ?>

<?php
$monfichier = fopen('compteur.txt', 'r+');

$pages_vues = fgets($monfichier); // On lit la première ligne (nombre de pages vues)
$pages_vues += 1; // On augmente de 1 ce nombre de pages vues
fseek($monfichier, 0); // On remet le curseur au début du fichier (slmt avec r ou r+)
fputs($monfichier, $pages_vues); // On écrit le nouveau nombre de pages vues

fclose($monfichier);

echo '<p>Cette page a été vue ' . $pages_vues . ' fois !</p>';
?>

SE CONNECTER A UNE BDD

<?php
try
{
// On se connecte à MySQL
$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e) // permet de garder les logs secrets en cas d'erreur, plus sécure !
{
// En cas d'erreur, on affiche un message et on arrête tout
	die('Erreur : '.$e->getMessage());
}
?>

FAIRE UNE REQUETE SELECT

<?php
try
{
$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table jeux_video avec *, sinon on nomme chaque champ
$reponse = $bdd->query('SELECT * FROM jeux_video');

// On affiche chaque entrée une à une grâce à fetch
while ($donnees = $reponse->fetch())
{
?>
	<p>
	<strong>Jeu</strong> : <?php echo $donnees['nom']; ?><br />
	Le possesseur de ce jeu est : <?php echo $donnees['possesseur']; ?>, et il le vend à <?php echo $donnees['prix']; ?> euros !<br />
	Ce jeu fonctionne sur <?php echo $donnees['console']; ?> et on peut y jouer à <?php echo $donnees['nbre_joueurs_max']; ?> au maximum<br />
	<?php echo $donnees['possesseur']; ?> a laissé ces commentaires sur <?php echo $donnees['nom']; ?> : <em><?php echo $donnees['commentaires']; ?></em>
 </p>
<?php
}

$reponse->closeCursor(); // Termine le traitement de la requête, indispensable

?>


<?php
try
{
$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$reponse = $bdd->query('SELECT nom, possesseur FROM jeux_video WHERE possesseur=\'Patrick\'  AND prix < 20'); // \' indispensable pour spécifier patrick // AND et OR sont utilisés pour ajouter des conditions

while ($donnees = $reponse->fetch())
{
echo $donnees['nom'] . ' appartient à ' . $donnees['possesseur'] . '<br />';
}

$reponse->closeCursor();

?>

FAIRE UNE REQUETE ORDER BY

<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$reponse = $bdd->query('SELECT nom, prix FROM jeux_video ORDER BY prix'); // DESC ajouté à la fin permet de trier decroissant

while ($donnees = $reponse->fetch())
{
	echo $donnees['nom'] . ' coûte ' . $donnees['prix'] . ' €<br />';
}

$reponse->closeCursor();

?>

FAIRE UNE REQUETE LIMIT

<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$reponse = $bdd->query('SELECT nom FROM jeux_video LIMIT 0, 10'); // LIMIT permet de n'afficger que certaines entrées (0=début, 10=nombre)

echo '<p>Voici les 10 premiers jeux :<p>';
while ($donnees = $reponse->fetch())
{
	echo $donnees['nom'] . '<br/>';
}

$reponse->closeCursor();
?>

REQUETE ALL IN

<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$reponse = $bdd->query('SELECT nom, console, prix FROM jeux_video WHERE console=\'PS2\' OR console=\'Xbox\' ORDER BY prix DESC LIMIT 0,25');
// WHERE, ORDER BY et LIMIT doivent être écrit dans cet ordre pour fonctionner correctement

echo '<p>Voici les jeux PS2 et XBOX classés par prix décroissants :</p>';
while ($donnees = $reponse->fetch())
{
	echo $donnees['nom'] . ' sur ' . $donnees['console'] . ' au prix de ' . $donnees['prix'] . '€<br/>' ;
}

$reponse->closeCursor();
?>
