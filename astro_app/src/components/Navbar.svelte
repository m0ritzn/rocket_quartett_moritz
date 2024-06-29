<script>
    import { push } from "svelte-spa-router";

    function navigateTo(path) {
        push(path);
    }
</script>

<nav class="navbar">
    <div class="logo">What's above you?</div>
    <div class="nav-links">
        <a
            class="nav-link"
            href="javascript:void(0);"
            on:click={() => navigateTo("/")}>Visualisierung</a
        >
        <a
            class="nav-link"
            href="javascript:void(0);"
            on:click={() => navigateTo("/tabelle")}>Tabelle</a
        >
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 2em;
    }

    .logo {
        font-size: 1.5em;
        font-weight: bold;
    }

    .nav-links {
        display: flex;
    }

    .nav-link {
        margin-left: 2em;
        color: white;
        text-decoration: none;
        font-size: 1em;
        transition: color 0.3s;
        cursor: pointer;
    }

    .nav-link:hover {
        color: #ffcc00;
    }
</style>
