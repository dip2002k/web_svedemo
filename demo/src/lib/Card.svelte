<script>
    export let breed = "Dog Breed";
    export let description = "A brief description about the dog.";
    export let image = "https://via.placeholder.com/150"; // Placeholder image
    
    
    const dog = {
        "id": 23,
        "breed": "German Longhaired Pointer",
        "origin": "Germany",
        "size": "Large",
        "temperament": ["Affectionate", "Energetic", "Intelligent"],
        "colors": ["Liver", "Liver and White"],
        "coatType": "Double coat",
        "coatLength": "Medium",
        "imageUrl": "https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg"
    };

    const card = document.getElementById("single-card");
   
    card.innerHTML =`
    <img src= "${dog.imageUrl}" alt="${dog.title}" class="dog-image">
    <h3>origin</h3>
        <p>${dog.origin}</p>
        <h3>size</h3>
        <p>${dog.size}</p>
        <h3>temperament</h3>
        <p>${dog.temperament.join(',')}</p>
        <h3>colors</h3>
        <p>${dog.colors.join(',')}</p>
    
    `
 </script>
  
  <div class="card" id="single-card">
    <!-- You can change the HTML in here if you need to -->
   <!-- <h2>German Longhaired Pointer</h2>
    <img src="https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg" alt="dog">
    <div class="info">
        <h3>origin</h3>
        <p>Germany</p>
        <h3>size</h3>
        <p>Large</p>
        <h3>temperament</h3>
        <ul>
            <li>Affectionate</li>
            <li>Energetic</li>
            <li>Intelligent</li>
        </ul>
    </div>-->
</div>

    
   

   
  <style>
    .card {
      width: 300px;
      padding: 20px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      text-align: center;
    }
  
    .card:hover {
      transform: scale(1.05);
    }
  
    .card img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  
    .card-title {
      font-size: 24px;
      font-weight: bold;
      margin-top: 10px;
      color: #333;
    }
  
    .card-content {
      font-size: 16px;
      color: #555;
      margin-top: 10px;
    }
  
    .card-footer {
      margin-top: 20px;
      font-size: 14px;
      color: #888;
    }
  </style>
  
 
  