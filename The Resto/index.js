// Gestion des menus  --> ligne 450

const menuContainer = document.querySelector(".menu");

const pdjButton = document.getElementById("pdj");
const dejeunerButton = document.getElementById("dejeuner");
const dinerButton = document.getElementById("diner");
const boissonButton = document.getElementById("boissons");
const vinButton = document.getElementById("autre");

pdjButton.addEventListener("click", (e) => {
  e.preventDefault();
  menuContainer.innerHTML = `<div class="menu-left">
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/pdj-1.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>Breakfast à l'anglaise</h3>
      <p>Café / oeuf sur le plat / bacon</p>
    </div>
    <div class="price"><span>12 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/pdj-3.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>Café du matin</h3>
      <p>Café / croissant</p>
    </div>
    <div class="price"><span>5 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/pdj-2.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>café gourmand</h3>
      <p>Café / croissant / accompagnement sucré</p>
    </div>
    <div class="price"><span>13 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/pdj-4.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>Pancake en douceur</h3>
      <p>Pancake / fruits frais / fromage blanc</p>
    </div>
    <div class="price"><span>16 €</span></div>
  </div>
</div>
<div class="menu-right">
<div class="plat">
<div class="image-menu">
  <img src="./assets/img/pdj-4.jpg" alt="Plat de plein de chose" />
</div>
<div class="description-menu">
  <h3>Pancake en douceur</h3>
  <p>Pancake / fruits frais / fromage blanc</p>
</div>
<div class="price"><span>16 €</span></div>
</div>
<div class="plat">
<div class="image-menu">
  <img src="./assets/img/pdj-2.jpg" alt="Plat de plein de chose" />
</div>
<div class="description-menu">
  <h3>café gourmand</h3>
  <p>Café / croissant / accompagnement sucré</p>
</div>
<div class="price"><span>13 €</span></div>
</div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/pdj-1.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>Breakfast à l'anglaise</h3>
      <p>Café / oeuf sur le plat / bacon</p>
    </div>
    <div class="price"><span>12 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/pdj-3.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>Café du matin</h3>
      <p>Café / croissant</p>
    </div>
    <div class="price"><span>5 €</span></div>
  </div>
</div>;`;
});

dejeunerButton.addEventListener("click", (e) => {
  e.preventDefault();
  menuContainer.innerHTML = `<div class="menu-left">
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-01.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>pates italiennes aux champignons</h3>
        <p>Champignons / Ail / Légumes</p>
      </div>
      <div class="price"><span>12 €</span></div>
    </div>
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-03.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>thon roti</h3>
        <p>thon / pommes de terre / riz</p>
      </div>
      <div class="price"><span>15 €</span></div>
    </div>
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-05.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>poulet frit salé</h3>
        <p>poulet / huile d'olive / sel</p>
      </div>
      <div class="price"><span>20 €</span></div>
    </div>
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-07.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>Steack de saumon importé</h3>
        <p>saumon / légumes / huile</p>
      </div>
      <div class="price"><span>16 €</span></div>
    </div>
  </div>
  <div class="menu-right">
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-02.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>Pommes de terre frites à l'ail</h3>
        <p>pommes de terre / huile d'olive / ail</p>
      </div>
      <div class="price"><span>22 €</span></div>
    </div>
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-04.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>roti de porc (4 tranches)</h3>
        <p>porc / légumes / riz</p>
      </div>
      <div class="price"><span>18 €</span></div>
    </div>
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-06.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>Crabe avec sauce au curry</h3>
        <p>crabe / pommes de terre / riz</p>
      </div>
      <div class="price"><span>14 €</span></div>
    </div>
    <div class="plat">
      <div class="image-menu">
        <img src="./assets/img/dish-item-08.jpg" alt="Plat de plein de chose" />
      </div>
      <div class="description-menu">
        <h3>Pommes de terre au four façon pizza</h3>
        <p>pommes de terre / pain / fromage</p>
      </div>
      <div class="price"><span>25 €</span></div>
    </div>
  </div>`;
});

dinerButton.addEventListener("click", (e) => {
  e.preventDefault();
  menuContainer.innerHTML = `<div class="menu-left">
  <div class="plat">
  <div class="image-menu">
    <img src="./assets/img/dish-item-02.jpg" alt="Plat de plein de chose" />
  </div>
  <div class="description-menu">
    <h3>Pommes de terre frites à l'ail</h3>
    <p>pommes de terre / huile d'olive / ail</p>
  </div>
  <div class="price"><span>22 €</span></div>
</div>
<div class="plat">
  <div class="image-menu">
    <img src="./assets/img/dish-item-04.jpg" alt="Plat de plein de chose" />
  </div>
  <div class="description-menu">
    <h3>roti de porc (4 tranches)</h3>
    <p>porc / légumes / riz</p>
  </div>
  <div class="price"><span>18 €</span></div>
</div>
<div class="plat">
  <div class="image-menu">
    <img src="./assets/img/dish-item-06.jpg" alt="Plat de plein de chose" />
  </div>
  <div class="description-menu">
    <h3>Crabe avec sauce au curry</h3>
    <p>crabe / pommes de terre / riz</p>
  </div>
  <div class="price"><span>14 €</span></div>
</div>
<div class="plat">
  <div class="image-menu">
    <img src="./assets/img/dish-item-08.jpg" alt="Plat de plein de chose" />
  </div>
  <div class="description-menu">
    <h3>Pommes de terre au four façon pizza</h3>
    <p>pommes de terre / pain / fromage</p>
  </div>
  <div class="price"><span>25 €</span></div>
</div>
    </div>
    <div class="menu-right">
    <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/dish-item-01.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>pates italiennes aux champignons</h3>
      <p>Champignons / Ail / Légumes</p>
    </div>
    <div class="price"><span>12 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/dish-item-03.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>thon roti</h3>
      <p>thon / pommes de terre / riz</p>
    </div>
    <div class="price"><span>15 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/dish-item-05.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>poulet frit salé</h3>
      <p>poulet / huile d'olive / sel</p>
    </div>
    <div class="price"><span>20 €</span></div>
  </div>
  <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/dish-item-07.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>Steack de saumon importé</h3>
      <p>saumon / légumes / huile</p>
    </div>
    <div class="price"><span>16 €</span></div>
  </div>
    </div>`;
});

vinButton.addEventListener("click", (e) => {
  e.preventDefault();
  menuContainer.innerHTML = `<div class="menu-left">
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Gault et Millau</h3>
          <p>Vin rouge de Bordeaux</p>
        </div>
        <div class="price"><span>12 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Vieilles Tours</h3>
          <p>Vin rouge de Bordeaux</p>
        </div>
        <div class="price"><span>15 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Carré des vignes</h3>
          <p>Vin blanc d'alsace</p>
        </div>
        <div class="price"><span>20 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Fou de terroir</h3>
          <p>Vin bleu des vosges</p>
        </div>
        <div class="price"><span>16 €</span></div>
      </div>
    </div>
    <div class="menu-right">
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>carlo del rey</h3>
          <p>Vin rouge de provence</p>
        </div>
        <div class="price"><span>22 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Vin de pailly</h3>
          <p>Cabernet Sauvignon</p>
        </div>
        <div class="price"><span>18 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Chateau du clos du roi</h3>
          <p>Vin rouge de Bourgogne</p>
        </div>
        <div class="price"><span>14 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/vin-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Le césar - Domaine des marroniers</h3>
          <p>Vin rouge du languedoc</p>
        </div>
        <div class="price"><span>25 €</span></div>
      </div>
    </div>`;
});

boissonButton.addEventListener("click", (e) => {
  e.preventDefault();
  menuContainer.innerHTML = `<div class="menu-left">
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/eau-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Eau minerale Vals</h3>
          <p></p>
        </div>
        <div class="price"><span>12 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/eau-2.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>eau gazeuse Badoit</h3>
          <p></p>
        </div>
        <div class="price"><span>15 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/coca-1.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Coca Cola</h3>
          <p></p>
        </div>
        <div class="price"><span>20 €</span></div>
      </div>
      <div class="plat">
        <div class="image-menu">
          <img src="./assets/img/orangina.jpg" alt="Plat de plein de chose" />
        </div>
        <div class="description-menu">
          <h3>Orangina</h3>
          <p></p>
        </div>
        <div class="price"><span>16 €</span></div>
      </div>
    </div>
    <div class="menu-right">
    <div class="plat">
    <div class="image-menu">
      <img src="./assets/img/eau-2.jpg" alt="Plat de plein de chose" />
    </div>
    <div class="description-menu">
      <h3>eau gazeuse Badoit</h3>
      <p></p>
    </div>
    <div class="price"><span>15 €</span></div>
  </div>
  <div class="plat">
  <div class="image-menu">
    <img src="./assets/img/eau-2.jpg" alt="Plat de plein de chose" />
  </div>
  <div class="description-menu">
    <h3>eau gazeuse Badoit</h3>
    <p></p>
  </div>
  <div class="price"><span>15 €</span></div>
</div>
<div class="plat">
<div class="image-menu">
  <img src="./assets/img/eau-2.jpg" alt="Plat de plein de chose" />
</div>
<div class="description-menu">
  <h3>eau gazeuse Badoit</h3>
  <p></p>
</div>
<div class="price"><span>15 €</span></div>
</div>
<div class="plat">
<div class="image-menu">
  <img src="./assets/img/eau-2.jpg" alt="Plat de plein de chose" />
</div>
<div class="description-menu">
  <h3>eau gazeuse Badoit</h3>
  <p></p>
</div>
<div class="price"><span>15 €</span></div>
</div>
    </div>`;
});
// -----------------------------------------------------

//  Gestion date formulaire

const today = new Date().toISOString().split("T")[0];
const dd = today.split("-")[2];
let mm = parseInt(today.split("-")[1]) + 2;
let mmiso = 0;
let yy = today.split("-")[0];

if (mm > 12) {
  mmiso = mm -= 12;
  yy++;
}
if (mm < 10) {
  mmiso = `0${mm}`;
}
const maxDate = `${yy}-${mmiso}-${dd}`;

start_date.value = today;
start_date.min = today;
start_date.max = maxDate;

//---------------------

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulaire validé !");
});

console.log(submitButton);
