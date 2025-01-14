const buildOwnerLI = (id, first_name, last_name, email) =>
	`
  <li id=${id} class="py-4 flex">
    <a href="/owner/detail.html?owner=${id}">
      <img
      class="h-10 w-10 rounded-full"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
      />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
        ${first_name} ${last_name}
        </p>
        <p class="text-sm text-gray-500">
          ${email}
        </p>
      </div>
    </a>
  </li>
`;
