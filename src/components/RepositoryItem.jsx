export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Name não informado'}</strong>
            <p>{props.repository?.description ?? 'Description não informada'}</p>
            <a href={props.repository?.html_url ?? '#'}> Acessar Repositório </a>
        </li>
    );
}