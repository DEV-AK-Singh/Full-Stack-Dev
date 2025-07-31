FROM mongo:latest
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root
EXPOSE 27017
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "mongosh", "--quiet" ]