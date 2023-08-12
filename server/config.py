from functools import lru_cache
from pydantic import BaseSettings


class Settings(BaseSettings):
    # creating default env variables
    env_name: str = "Local"
    base_url: str = "http://localhost:8000"
    db_url: str = "sqlite:///./shortener.db"

    class Config:
        env_file = ".env"


@lru_cache  # used for caching (storing last used values)...lru = least recently used
def get_settings() -> Settings:
    settings = Settings()
    print(f"Loading settings for {settings.env_name}")
    return settings
