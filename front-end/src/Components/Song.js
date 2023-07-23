
export default function Song({song}) {

    return( 
    <tr className="song">
        <td>
            {song.is_favorite ? '⭐️':''}
        </td>
        <td>
            <a href={`/songs/${song.id}`}>{song.name}</a>
        </td>
        <td>
            {song.artist}
        </td>
        <td>
            {song.time}
        </td>
    </tr>
  )
}
